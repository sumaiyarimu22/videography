import { FavoriteRounded } from "@mui/icons-material";
import styled from "styled-components";

const Card = styled.div``;
const Top = styled.div``;
const CardImage = styled.div``;
const CardInformation = styled.div``;
const MainInfo = styled.div``;
const Title = styled.div``;
const Decryption = styled.div``;
const Creator = styled.div``;
const Avatar = styled.div``;
const CreatorName = styled.div``;
const Views = styled.div``;

const PodcastCart = () => {
  return (
    <Card>
      <Top>
        <FavoriteRounded />
        <CardImage />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>Tim Tim Ferriss Show</Title>
          <Decryption>
            The Tim Ferriss Show explores peak performance, life hacks, and
            success through in-depth interviews with influential individuals,
            offering actionable insights.
          </Decryption>
          <Creator>
            <Avatar>A</Avatar>
            <CreatorName>Ayra</CreatorName>
          </Creator>
          <Views>12 Views</Views>
        </MainInfo>
      </CardInformation>
    </Card>
  );
};

export default PodcastCart;
