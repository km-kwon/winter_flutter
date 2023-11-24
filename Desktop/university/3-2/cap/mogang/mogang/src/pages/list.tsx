import Header from "./../components/default/Header";
import MainBody from "./../components/body/listBody";
import Footer from "./../components/default/Footer";
import { useLocation } from "react-router";

function List() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <MainBody
        free={location.state.free}
        option1={location.state.option}
        categoryName1={location.state.categoryName}
        detailCategoryName1={location.state.detailCategoryName}
      />
      <Footer />
    </>
  );
}

export default List;
