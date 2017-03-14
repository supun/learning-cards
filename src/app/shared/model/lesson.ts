export class Lesson{

    constructor(
    public author:string,
    public code: string,
    public description:string,
    public id: number,
    public image:Object,
    public title:string) {

    }

 static fromJsonArray(json: any[]): Lesson[] {
    return json.map(Lesson.fromJson);
}

  static fromJson({author,code,description,id,image,title}):Lesson{
    return new Lesson(
      author,
      code,
      description,
      id,
      image,
      title
    );
  }
}