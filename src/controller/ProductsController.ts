
import { Request, Response } from "express"
import { z } from 'zod';




class ProductsController {


    index(request: Request, response: Response) {


        const { page, limit } = request.query
        response.send(`pág ${page} de ${limit} `)
    }

    create(request: Request, response: Response) {
        const bodySchema = z
            .object({
                name: z
                    .string({ required_error: "Name is required" })
                    .trim()
                    .min(6, { message: "Product name must be at least 5 characters long." }),
                price: z
                    .number({ required_error: "Price is required" })
                    .positive({message: "Price must be positive"})

            });
        const { name, price } = bodySchema.parse(request.body)



        // if (!name) {
        //     throw new AppError("Nome  do produto é obrigatório!s")

        // }
        // if (name.trim().length < 5) {
        //     throw new AppError("Nome  do produto precisa ter pelo menos 5 caracteres")

        // }
        // if (!price) {
        //     throw new AppError("Preço do produto É obrigatório!s")

        // }
        // if (price < 0) {
        //     throw new AppError("Preço do produto NÃO PODE SER MENOR QUE zERO!")

        // }



        // throw new Error("Um erro de exemplo!")
        //throw new AppError("Erro ao tentar criar um produto!")

        response.status(201).json({ name, price, user_id: request.user_id })
    }

}




export { ProductsController }