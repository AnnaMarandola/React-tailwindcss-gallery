import { ReactComponent as Likes } from "../assets/thumb.svg";
import { ReactComponent as Views } from "../assets/views.svg";
import { ReactComponent as Download } from "../assets/download.svg";

const ImageInfo = ({image}) => {
    return (
        <ul className="list-inside flex justify-evenly text-sm">
        <li className="flex items-center">
          {image.views}
          <Views />
        </li>
        <li className="flex items-center">
          {image.likes}
          <Likes />
        </li>
        <li className="flex items-center">
          {image.downloads}
          <Download />
        </li>
      </ul>
    )
}
export default ImageInfo;
