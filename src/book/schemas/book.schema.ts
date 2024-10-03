import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export enum categoryEnum {
    ADVENTURE = 'adventure',
    FANTASY = 'fantasy',
    MYSTERY = 'mystery',
    ROMANCE = 'romance',
    SCIFI = 'science fiction',


}

@Schema({
    timestamps: true,
})
export class Book {
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    author: string;
    @Prop()
    price: number;
    @Prop()
    category: categoryEnum;
}

export const BookSchema = SchemaFactory.createForClass(Book);