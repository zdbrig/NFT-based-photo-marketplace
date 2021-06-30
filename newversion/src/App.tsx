import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Token from "./pages/Token";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Authors from "./pages/Authors";
import Author from "./pages/Author";
import Collection from "./pages/Collection";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Exploresecond from "./pages/Exploresecond";
import ExplorestyleThree from "./pages/ExplorestyleThree";
import Item from "./pages/Item";
import Homesecond from "./pages/Homesecond";
import Homethree from "./pages/Homethree";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Privacy from "./pages/Privacy";
import EditProfil from "./pages/EditProfil";
import PageNotFound from "./pages/Pagenotfound";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        {" "}
                        <HomeLink></HomeLink>{" "}
                    </Route>
                    <Route path="/Home">
                        {" "}
                        <HomeLink></HomeLink>{" "}
                    </Route>
                    <Route path="/Activity">
                        <ActivityLink></ActivityLink>
                    </Route>
                    <Route path="/EditProfil">
                        <EditProfilLink></EditProfilLink>
                    </Route>
                    <Route path="/Token">
                        <TokenLink></TokenLink>
                    </Route>
                    <Route path="/Faq">
                        <FaqLink></FaqLink>
                    </Route>
                    <Route path="/Contact">
                        {" "}
                        <ContactLink></ContactLink>
                    </Route>
                    <Route path="/Blog">
                        <BlogLink></BlogLink>
                    </Route>
                    <Route path="/Article">
                        <ArticleLink></ArticleLink>
                    </Route>
                    <Route path="/Authors">
                        <AuthorsLink></AuthorsLink>
                    </Route>
                    <Route path="/Author">
                        <AuthorLink></AuthorLink>
                    </Route>
                    <Route path="/Collection">
                        <CollectionLink></CollectionLink>
                    </Route>
                    <Route path="/Create">
                        <CreateLink></CreateLink>
                    </Route>
                    <Route path="/Explore">
                        <ExploreLink></ExploreLink>
                    </Route>
                    <Route path="/Exploresecond">
                        <ExploresecondLink></ExploresecondLink>
                    </Route>
                    <Route path="/Explorethree">
                        <ExplorestyleThreeLink></ExplorestyleThreeLink>
                    </Route>
                    <Route path="/Item">
                        <ItemLink></ItemLink>
                    </Route>
                    <Route path="/Homesecond">
                        <HomesecondLink></HomesecondLink>
                    </Route>
                    <Route path="/Homethree">
                        <HomethreeLink></HomethreeLink>
                    </Route>
                    <Route path="/Signin">
                        <SigninLink></SigninLink>
                    </Route>
                    <Route path="/Signup">
                        <SignupLink></SignupLink>
                    </Route>
                    <Route path="/Forgot">
                        <ForgotLink></ForgotLink>
                    </Route>
                    <Route path="/Privacy">
                        <PrivacyLink></PrivacyLink>
                    </Route>
                    <Route path="/PageNotFound">
                        <PageNotFoundLink></PageNotFoundLink>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}
function HomeLink() {
    return <Home />;
}
function EditProfilLink() {
    return <EditProfil />;
}
function PageNotFoundLink() {
    return <PageNotFound></PageNotFound>;
}
function ExploresecondLink() {
    return <Exploresecond />;
}
function PrivacyLink() {
    return <Privacy />;
}
function ActivityLink() {
    return <Activity />;
}
function TokenLink() {
    return <Token></Token>;
}
function FaqLink() {
    return <Faq></Faq>;
}
function ContactLink() {
    return <Contact></Contact>;
}
function BlogLink() {
    return <Blog></Blog>;
}
function ArticleLink() {
    return <Article></Article>;
}
function AuthorsLink() {
    return <Authors></Authors>;
}
function AuthorLink() {
    return <Author></Author>;
}
function CollectionLink() {
    return <Collection></Collection>;
}
function CreateLink() {
    return <Create></Create>;
}
function ExploreLink() {
    return <Explore></Explore>;
}
function ExplorestyleThreeLink() {
    return <ExplorestyleThree></ExplorestyleThree>;
}
function ItemLink() {
    return <Item></Item>;
}
function HomesecondLink() {
    return <Homesecond></Homesecond>;
}
function HomethreeLink() {
    return <Homethree></Homethree>;
}
function SigninLink() {
    return <Signin></Signin>;
}
function SignupLink() {
    return <Signup></Signup>;
}
function ForgotLink() {
    return <Forgot></Forgot>;
}
export default App;
