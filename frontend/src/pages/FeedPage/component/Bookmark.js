import React, { useEffect,useState } from "react";
import { useAppContext } from "../../../context/appContext";
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";


const Bookmark = React.memo(({ saved,postid }) => {
    const { user, savepost, unsavepost } = useAppContext();
    const [bookmarked, Setbookmark] = useState(false);
  useEffect(() => {
    if (saved.find((like) => like === user._id)) {
      Setbookmark(true);
      // postState.bookmarked= true
    } else {
      // postState.bookmarked = false
      Setbookmark(false);
    }
  }, [saved, user._id]);

  const togglesave = (e) => {
    e.preventDefault();

    if (bookmarked) {
      unsavepost({ postid });
      Setbookmark( false );
    } else {
      savepost({ postid });
      Setbookmark( true );
    }
  };
  return (
    <div>
      {bookmarked ? (
        <BsFillBookmarkFill className="icon black" onClick={togglesave} />
      ) : (
        <BsBookmark className="icon" onClick={togglesave} />
      )}
    </div>
  );
});

export default Bookmark;
