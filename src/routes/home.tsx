import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox, ListContainer } from "../components";
import { faRing } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <ListContainer title="">
      <FlexBox flexDirection="column" gap="1rem" alignItems="center" justifyContent="center">
        <h1>The Lord of the Rings</h1>
        <FontAwesomeIcon icon={faRing} size="10x" />
        <p>All data comes from the <a href="https://the-one-api.dev" target="_blank" rel="noreferrer">one api to rule them all</a>.</p>
      </FlexBox>
    </ListContainer>
  )
}