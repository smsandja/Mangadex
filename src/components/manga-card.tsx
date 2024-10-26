import React, {FunctionComponent} from "react";
import Manga from "../models/manga";
import './manga-card.css';

type Props = {
    manga: Manga,
    borderColor?: string
};
const MangaCard: FunctionComponent<Props> = ({manga, borderColor = '#009688'}) => {


    return (
        <div>
                 <div className="col s6 m4">
                    <div className="card horizontal" style={{ borderColor: borderColor}}>
                        <div className="card-image">
                            <img src={manga.picture}  alt={manga.name} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{manga.name}</p>
                                <p><small>{manga.created.toString()}</small></p>
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
    );
} 
export default MangaCard; 