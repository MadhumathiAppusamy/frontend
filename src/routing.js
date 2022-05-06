import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PersonalDetails from "./component/personalDetails/PersonalDetails";
import EducationalDetails from "./component/educationalDetail/EducationalDetails";
import ProjectDeveloped from "./component/projectDeveloped/ProjectDeveloped";
import ExperienceDetails from "./component/experienceDetails/ExperienceDetails";
import ExtraDetails from "./component/extraDetails/ExtraDetails";
const routing = (
  <div>
    <Router>
      <Link to="/" />
      <Link to="/Education" />
      <Link to="/Project" />
      <Link to="/Experience" />
      <Link to="/Extra" />
      <Route exact path="/" component={PersonalDetails} />
      <Route path="/Education" component={EducationalDetails} />
      <Route path="/Project" component={ProjectDeveloped} />
      <Route path="/Experience" component={ExperienceDetails} />
      <Route path="/Extra" component={ExtraDetails} />
    </Router>
  </div>
);
export default routing;
