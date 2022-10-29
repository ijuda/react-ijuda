import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  cardTitle: string;
  cardContent: string;
  image: string;
  alt: string;
};

const RegisterCard = ({ cardContent, cardTitle, image, alt }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RegisterCard;
