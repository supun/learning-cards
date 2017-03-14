import { Lesson } from './lesson';
export class wpObj{

    constructor(
    public id:number,
    public acf: Lesson) {

  }

 static fromJsonArray(json: any[]): Lesson[] {
    return json.map(wpObj.fromJson);
}

  static fromJson({id,acf}):Lesson{
    return new Lesson(
      acf.author,
      acf.code,
      acf.description,
      acf.id,
      acf.image,
      acf.title
   );
  }
}