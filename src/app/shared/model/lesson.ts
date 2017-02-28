export class Lesson{

    constructor(
    public id:number,
    public title: string,
    public description: string,
    public flipContentFront:string,
    public flipContentBack:string) {

  }

 static fromJsonArray(json: any[]): Lesson[] {
    return json.map(Lesson.fromJson);
}

  static fromJson({id,title,description,flipContentFront,flipContentBack}):Lesson{
    return new Lesson(
      id,
      title,
      description,
      flipContentFront,
      flipContentBack
    );
  }
}