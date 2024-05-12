console.log("----1.1----");
const draw1 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    text += "*";
  }
  console.log(text);
};
draw1(2);
draw1(3);
draw1(4);

console.log("----1.2----");
const draw2 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += "*";
    }
    text += "\n";
  }
  console.log(text);
};
draw2(2);
draw2(3);
draw2(4);

console.log("----1.3----");
const draw3 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += j + 1;
    }
    text += "\n";
  }
  console.log(text);
};
draw3(2);
draw3(3);
draw3(4);

console.log("----1.4----");
const draw4 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += i + 1;
    }
    text += "\n";
  }
  console.log(text);
};
draw4(2);
draw4(3);
draw4(4);

console.log("----1.5----");
const draw5 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += n - i;
    }
    text += "\n";
  }
  console.log(text);
};
draw5(2);
draw5(3);
draw5(4);

console.log("----1.6----");
const draw6 = function (n) {
  let text = "";
  let number = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += number;
      number++;
    }

    text += "\n";
  }
  console.log(text);
};
draw6(2);
draw6(3);
draw6(4);

console.log("----1.7----");
const draw7 = function (n) {
  let text = "";
  const totalElements = n * n;
  let currentNumber = totalElements;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (currentNumber > 0) {
        text += currentNumber;
        currentNumber--;
      }
      text += "";
    }
    text += "\n";
  }
  console.log(text);
};
draw7(2);
draw7(3);
draw7(4);

console.log("----1.8----");
const draw8 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 1; j++) {
      text += i * 2;
    }
    text += "\n";
  }
  console.log(text);
};
draw8(2);
draw8(3);
draw8(4);

console.log("----1.9----");
const draw9 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 1; j++) {
      text += (i + 1) * 2;
    }
    text += "\n";
  }
  console.log(text);
};
draw9(2);
draw9(3);
draw9(4);

console.log("----1.10----");
const draw10 = function (n) {
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      text += i * j;
    }
    text += "\n";
  }
  console.log(text);
};
draw10(2);
draw10(3);
draw10(4);

console.log("----1.11----");
const draw11 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        text += "_";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw11(2);
draw11(3);
draw11(4);

console.log("----1.12----");
debugger;
const draw12 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j == n - 1) {
        text += "_";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw12(2);
draw12(3);
draw12(4);

console.log("----2.1----");
debugger;
const draw21 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        text += "*";
      } else {
        text += "_";
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw21(2);
draw21(3);
draw21(4);

console.log("----2.2----");
debugger;
const draw22 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j <= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw22(2);
draw22(3);
draw22(4);

console.log("----2.3----");
debugger;
const draw23 = function (n) {
  let text = "";
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j <= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }
  console.log(text);
};
draw23(2);
draw23(3);
draw23(4);

console.log("----2.4----");
debugger;
const draw24 = function (n) {
  let text = "";
  let num = n + 1;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        text += i + 1;
      } else {
        text += "_";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j <= n - 1) {
        text += num - 1;
      } else {
        text += "_";
      }
    }

    text += "\n";
    num--;
  }
  console.log(text);
};
draw24(2);
draw24(3);
draw24(4);

console.log("----2.5----");
debugger;
const draw25 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }

  console.log(text);
};
draw25(2);
draw25(3);
draw25(4);

console.log("----2.6----");
debugger;
const draw26 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += "*";
      } else {
        text += "_";
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw26(2);
draw26(3);
draw26(4);

console.log("----2.7----");
const draw27 = function (n) {
  let text = "";
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += "*";
      } else {
        text += "_";
      }
    }
    text += "\n";
  }

  console.log(text);
};
draw27(2);
draw27(3);
draw27(4);

console.log("----2.8----");
const draw28 = function (n) {
  let text = "";
  let num = 1;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += num;
        num++;
      } else {
        text += "-";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += num;
        num++;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }

  console.log(text);
};
draw28(2);
draw28(3);
draw28(4);

console.log("----2.9----");
const draw29 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }

  console.log(text);
};
draw29(2);
draw29(3);
draw29(4);

console.log("----2.10----");
const draw30 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += "*";
      } else {
        text += "_";
      }
    }
    for (let j = 1; j < n; j++) {
      if (i + j <= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }  
    text += "\n";
  }
  console.log(text);
};
draw30(2);
draw30(3);
draw30(4);

console.log("----3.1----");
const draw31 = function (n) {
  let text = "";
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        text += "*";
      } else {
        text += "_";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += "*";
      } else {
        text += "_";
      }
    }
    for (let j = 1; j < n; j++) {
      if (i + j <= n - 1) {
        text += "*";
      } else {
        text += "_";
      }
    }  
    text += "\n";
  }

  console.log(text);
};
draw31(2);
draw31(3);
draw31(4);

console.log("----3.2----");
const draw32 = function (n) {
  let text = "";
  let num = 1;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        text += num;
        num++;
      } else {
        text += "-";
      }
      
    }
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        text += num;
        num++;
      } else {
        text += "-";
      }
    }

    text += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += num;
        num++;
      } else {
        text += "-";
      }
    }
    for (let j = 1; j < n; j++) {
      if (i + j <= n - 1) {
        text += num;
        num++;
      } else {
        text += "-";
      }
    }  
    text += "\n";
  }

  console.log(text);
};
draw32(2);
draw32(3);
draw32(4);

console.log("----3.3----");
const draw33 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i>=j) {
        text += '*';
      } else {
        text += '_';
      }
    }
    text += "\n";
  }
  console.log(text);
}

draw33(2);
draw33(3);
draw33(4);
