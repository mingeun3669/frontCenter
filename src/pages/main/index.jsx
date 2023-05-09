import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div>메인페이지</div>
      <Button>
        <Link to="/todos">만들기</Link>
      </Button>
    </>
  );
}
