import Theme from '../styles/theme';
import {Helmet} from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Susanta Kumar Dutta</title>
            <link rel="canonical" href="https://sushantskd1357.github.io" />
          </Helmet>
      </div>
    </>
  );
}
 