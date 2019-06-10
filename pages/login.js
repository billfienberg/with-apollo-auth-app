import React from "react";
import Link from "next/link";

import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";

import LogInBox from "../components/LogInBox";

export default class LogIn extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient);

    if (loggedInUser.user) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, "/");
    }

    return {};
  }

  render() {
    return (
      <React.Fragment>
        {/* LogInBox handles all login logic. */}
        <LogInBox />
        <hr />
        New?{" "}
        <Link prefetch href="/create-account">
          <a>Create account</a>
        </Link>
      </React.Fragment>
    );
  }
}
