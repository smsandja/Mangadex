export default class Manga {
// 1. Typage des proprietes d'un manga
id: number;
hp: number;
cp: number;
name: string;
picture: string;
types: Array<string>;
created: Date;

//2. Definition des valeurs par defaut des proprietes d'un manga
constructor(
    id: number,
    hp: number = 100,
    cp: number = 10,
    name: string = 'name',
    picture: string = 'http://...',
    types: Array<string> = ['Normal'],
    created: Date = new Date()
) {
    //3. Initialisation des proprietes d'un manga
    this.id = id;
    this.hp = hp;
    this.cp =  cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;

}
}