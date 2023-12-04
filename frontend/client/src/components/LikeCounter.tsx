import { FavoriteBorder, Favorite } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { CardActionArea, Checkbox } from "@mui/material";
import React from "react";

export default function LikeCounter() {
  const [like, setLike] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked(event.target.checked);
    if (clicked === false) {
      handleNewLike();
    } else {
      handleDislike();
    }
  };

  function handleNewLike() {
    setLike(like + 1);
  }

  function handleDislike() {
    setLike(like - 1);
  }

  return (
    <CardActionArea>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={(event) => handleCheckboxChange(event)}
      />
      {like}
    </CardActionArea>
  );
}
