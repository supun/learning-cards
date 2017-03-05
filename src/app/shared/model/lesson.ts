export class Lesson{

    constructor(
    public id:number,
    public title: string,
    public description: string) {

  }

 static fromJsonArray(json: any[]): Lesson[] {
    return json.map(Lesson.fromJson);
}

  static fromJson({id,title,description}):Lesson{
    return new Lesson(
      id,
      title,
      description
    );
  }
}