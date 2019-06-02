import React from "react";
import Link from "next/link";

import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";

import SignUpBox from "../components/SignUpBox";

export default class SignUp extends React.Component {
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
        {/* SignUpBox handles all register logic. */}
        <SignUpBox />
        <hr />
        Already have an account?{" "}
        <Link prefetch href="/signin">
          <a>Sign in</a>
        </Link>
      </React.Fragment>
    );
  }
}
