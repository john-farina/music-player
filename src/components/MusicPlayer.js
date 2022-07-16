import { Howl, Howler } from 'howler';

function MusicPlayer({ musicInfo }) {
    const title = musicInfo.title;
    const author = musicInfo.author;
    const songSrc = musicInfo.audio;
    const imageSrc = musicInfo.image;

    // const song = new Howl({
    //     src: ['./audio/dreams.mp3'],
    //     autoplay: true,
    // });
    // song.load();
    return (
        <div className="MusicPlayer">
            <div className="playerContainer">
                <img
                    className="musicImage"
                    src={imageSrc}
                    alt={'this song is called ' + title}
                />
                <p className="musicTitle">{title}</p>
                <p className="musicAuthor">
                    by: <span className="authorName">{author}</span>
                </p>
                <div className="progressBar"></div>
                <div className="musicButtonsContainer">
                    <button
                        onClick={() => {
                            // song.play();
                        }}
                    >
                        play
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
