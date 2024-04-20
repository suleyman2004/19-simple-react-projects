import "./App.css";
import ScrollToParticularSection from "./components/scroll-particular-section";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import UseWindowResizeTest from "./components/use-window-resize/test";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load_more_data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-withAPI";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
function App() {
  return (
    <div className="App">
      {/* Uncomment tags if you want to see */}

      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <TabTest/> */}

      {/* <ModalTest/> */}

      {/* <GithubProfileFinder/> */}

      {/* <SearchAutocomplete/> */}

      {/* <TicTacToe/> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest/> */}

      {/* <UseOnclickOutsideTest/> */}

      {/* <UseWindowResizeTest/> */}

      {/* <ScrollToTopAndBottom/> */}

      {/* <ScrollToParticularSection/> */}
    </div>
  );
}

export default App;
