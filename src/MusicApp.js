import './index.css';
import MusicPlayer from './components/MusicPlayer';

const musicData = [
    {
        id: 1,
        title: 'Dreams',
        author: 'John Farina',
        image: 'https://i.kfs.io/album/global/154767749,0v1/fit/500x500.jpg',
        audio: './audio/dreams.mp3',
    },
    {
        id: 2,
        title: 'tired.',
        author: 'John Farina',
        image: './img/dreams.jpeg',
        audio: './audio/dreams.mp3',
    },
];

function MusicApp() {
    return (
        <div className="MusicApp">
            <MusicPlayer musicInfo={musicData[0]} />
        </div>
    );
}

export default MusicApp;
