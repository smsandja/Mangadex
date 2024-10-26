import React, {FunctionComponent, useState, useEffect} from "react";
import Manga from "../models/manga";
import MANGAS from "../models/mock-manga";
import MangaCard from "../components/manga-card";

const MangaList: FunctionComponent = ()=>{

    const [mangas, setMangas] = useState<Manga[]>([]);
    useEffect(()=>{
        setMangas(MANGAS);
    }, []);

    return (
        <div>
            <h1 className="center">Mangadex</h1>
            <div className="container">
                <div className="row">
                    {mangas.map(manga => (
                        <MangaCard key={manga.id} manga={manga}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
 export default MangaList;