import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 640,
    background: 'rgb(255,255,255)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  markDown: {
    position: 'fixed',
    top: '57px',
    right: '0',
    left: '50%',
    bottom: '0',
    overflow: 'auto',
    padding: '10px',
    'padding-left': '20px',
    color: '#444',
    'font-family': "Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif",
    'font-size': '16px',
    'line-height': '1.5em',
  }
});

const sourceCode = "#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n#include <cmath>\n#include <cassert>\n#include <algorithm>\n#include <functional>\n#include <iostream>\n#include <map>\n#include <numeric>\n#include <queue>\n#include <set>\n#include <stack>\n#include <string>\n#include <tuple>\n#include <vector>\n#define repi(i,a,b) for(ll i=(a);i<(b);++i)\n#define rep(i,a) repi(i,0,a)\n#define repdi(i,a,b) for(ll i=(a)-1;i>=(b);--i)\n#define repd(i,a) repdi(i,a,0)\n#define itr(it,a) for( auto it = (a).begin(); it != (a).end(); ++it )\n#define all(a) (a).begin(), (a).end()\n#define rall(a) (a).rbegin(), (a).rend()\n#define endl '\\n'\n#define debug(x) std::cerr << #x << \" = \" << (x) << endl;\n\nusing ll = long long;\nusing P = std::pair<ll, ll>;\n\nconstexpr ll INF = 1ll<<60;\n\ntemplate<class T> inline bool chmax(T& a, T b) { if (a < b) { a = b; return 1; } return 0; }\ntemplate<class T> inline bool chmin(T& a, T b) { if (a > b) { a = b; return 1; } return 0; }\n\ntemplate<class S, class T>\nstd::ostream& operator<< ( std::ostream& out, const std::pair<S,T>& a )\n{ std::cout << '(' << a.first << \", \" << a.second << ')'; return out; }\n\ntemplate<class T>\nstd::ostream &operator<< ( std::ostream& out, const std::vector<T>& a )\n{ std::cout << '['; rep( i, a.size() ){ std::cout << a[i]; if( i != a.size()-1 ) std::cout << \", \"; } std::cout << ']'; return out; }\n\nll N, M;\nstd::vector<ll> G[610];\n\ndouble f( ll block ) {\n  std::vector<double> dp( N );\n  \n  repd( i, N-1 ) {\n    double sum = 0;\n    double ma = 0;\n    ll num = 0;\n\n    for( auto u : G[i] ) {\n      sum += dp[u];\n      chmax( ma, dp[u] );\n      ++num;\n    }\n\n    if( i == block && num > 1 ) {\n      sum -= ma;\n      --num;\n    }\n\n    dp[i] = sum / num + 1;\n  }\n\n  return dp[0];\n}\n\nint main() {\n  std::cin >> N >> M;\n\n  rep( i, M ) {\n    ll s, t;\n    std::cin >> s >> t;\n    --s; --t;\n\n    G[s].emplace_back( t );\n  }\n\n  double ans = 1e18;\n\n  rep( i, N-1 ) {\n    chmin( ans, f(i) );\n  }\n\n  printf( \"%.12f\\n\", ans );\n\n  return 0;\n}\n";
const markdown = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/) $$T_i$$
`;

const cards = [
  {"problemUrl":"https://atcoder.jp/contests/abc144/tasks/abc144_f","code":sourceCode,"comment":"### テスト\n$\\sigma_U \\sim \\mathrm{Normal}(0, \\Theta_U^2)$ $$T_i$$","solvedFlag":true},
  {"problemUrl":"https://atcoder.jp/contests/abc144/tasks/abc144_f","code":sourceCode,"comment":markdown,"solvedFlag":true},
  {"problemUrl":"https://atcoder.jp/contests/abc144/tasks/abc144_f","code":sourceCode,"comment":"### テスト","solvedFlag":true},
];

const Home = () => {
  const classes = useStyles();
  const cardComponents = cards.map( card => {
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
            Problem Url:
          </Typography>
          <Typography className={classes.pos} variant="h5" component="h2">
            <a href={card.problemUrl}>{card.problemUrl}</a>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">
            <Link to="/detail" style={{ textDecoration: 'none' }}>詳細へ</Link>
          </Button>
        </CardActions>
      </Card>
    )
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"><Link to="/edit" style={{ textDecoration: 'none' }}>Create Card</Link></Typography>
        </Toolbar>
      </AppBar>
      <div>
        {cardComponents}
      </div>
    </div>
  );
}

export default Home;