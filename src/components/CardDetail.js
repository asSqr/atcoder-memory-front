import React from 'react';
import ReactMarkDown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import toc from 'remark-toc';
import Code from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
  root: {
    minWidth: 640,
    background: 'rgb(255,255,255)',
  },
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
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
}));

const sourceCode = "#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n#include <cmath>\n#include <cassert>\n#include <algorithm>\n#include <functional>\n#include <iostream>\n#include <map>\n#include <numeric>\n#include <queue>\n#include <set>\n#include <stack>\n#include <string>\n#include <tuple>\n#include <vector>\n#define repi(i,a,b) for(ll i=(a);i<(b);++i)\n#define rep(i,a) repi(i,0,a)\n#define repdi(i,a,b) for(ll i=(a)-1;i>=(b);--i)\n#define repd(i,a) repdi(i,a,0)\n#define itr(it,a) for( auto it = (a).begin(); it != (a).end(); ++it )\n#define all(a) (a).begin(), (a).end()\n#define rall(a) (a).rbegin(), (a).rend()\n#define endl '\\n'\n#define debug(x) std::cerr << #x << \" = \" << (x) << endl;\n\nusing ll = long long;\nusing P = std::pair<ll, ll>;\n\nconstexpr ll INF = 1ll<<60;\n\ntemplate<class T> inline bool chmax(T& a, T b) { if (a < b) { a = b; return 1; } return 0; }\ntemplate<class T> inline bool chmin(T& a, T b) { if (a > b) { a = b; return 1; } return 0; }\n\ntemplate<class S, class T>\nstd::ostream& operator<< ( std::ostream& out, const std::pair<S,T>& a )\n{ std::cout << '(' << a.first << \", \" << a.second << ')'; return out; }\n\ntemplate<class T>\nstd::ostream &operator<< ( std::ostream& out, const std::vector<T>& a )\n{ std::cout << '['; rep( i, a.size() ){ std::cout << a[i]; if( i != a.size()-1 ) std::cout << \", \"; } std::cout << ']'; return out; }\n\nll N, M;\nstd::vector<ll> G[610];\n\ndouble f( ll block ) {\n  std::vector<double> dp( N );\n  \n  repd( i, N-1 ) {\n    double sum = 0;\n    double ma = 0;\n    ll num = 0;\n\n    for( auto u : G[i] ) {\n      sum += dp[u];\n      chmax( ma, dp[u] );\n      ++num;\n    }\n\n    if( i == block && num > 1 ) {\n      sum -= ma;\n      --num;\n    }\n\n    dp[i] = sum / num + 1;\n  }\n\n  return dp[0];\n}\n\nint main() {\n  std::cin >> N >> M;\n\n  rep( i, M ) {\n    ll s, t;\n    std::cin >> s >> t;\n    --s; --t;\n\n    G[s].emplace_back( t );\n  }\n\n  double ans = 1e18;\n\n  rep( i, N-1 ) {\n    chmin( ans, f(i) );\n  }\n\n  printf( \"%.12f\\n\", ans );\n\n  return 0;\n}\n";

const card = {"problemUrl":"https://atcoder.jp/contests/abc144/tasks/abc144_f","code":sourceCode,"comment":"### テスト\n$\\sigma_U \\sim \\mathrm{Normal}(0, \\Theta_U^2)$ $$T_i$$","solvedFlag":true};

const tags = [
  "期待値 dp",
  "浮動小数点",
  "確率",
  "より早い解法あり",
];

const CardDetail = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
            Problem Url:
          </Typography>
          <Typography className={classes.pos} variant="h5" component="h2">
            <a href={card.problemUrl}>{card.problemUrl}</a>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Comment:
          </Typography>
          <Typography className={classes.pos} variant="h5" component="h2">
            <MathJax.Provider input="tex">
              <ReactMarkDown
                source={card.comment}
                escapeHtml={false}
                renderers={{
                  math: props => {
                    return <MathJax.Node formula={props.value} />
                  },
                  inlineMath: props => {
                    return <MathJax.Node inline formula={props.value} />
                  }
                }}
                plugins={[toc, RemarkMathPlugin]}
              ></ReactMarkDown>
            </MathJax.Provider>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Source Code:
          </Typography>
          <Typography className={classes.pos}>
            <Code language="cpp" style={dark}>
              {card.code}
            </Code>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Tags:
          </Typography>
          <div className={classes.chip}>
            {tags.map( tag => {
              return (
                <Chip
                  avatar={<Avatar>{tag[0].toUpperCase()}</Avatar>}
                  label={tag}
                  color="primary"
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardDetail;