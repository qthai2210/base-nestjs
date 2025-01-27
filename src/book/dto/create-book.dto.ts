import { categoryEnum } from "../schemas/book.schema";


export class CreateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: categoryEnum;
}