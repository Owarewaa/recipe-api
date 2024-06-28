import { Schema, model,} from "mongoose";
import normalize from "normalize-mongoose"

const catergorySchema = new Schema ({
name: {type: String, required: true, unique: true},
image: {type: String, required: true}
}, {
    timestamps: true
}
);


catergorySchema.plugin(normalize);

export const CategoryModel = model('Category', catergorySchema)