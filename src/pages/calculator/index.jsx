import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./index.module.css";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [symbol, setSymbol] = useState(null);
  const [lastValue, setLastValue] = useState(0);
  const numberButtonOnClick = (num) => {
    if (symbol) setLastValue((prev) => +(prev + "" + num));
    else setFirstValue((prev) => +(prev + "" + num));
  };
  const onClickToSymbol = (symbol) => {
    setSymbol(symbol);
  };
  const getResult = () => {
    switch (symbol) {
      case "/":
        return firstValue / lastValue;
      case "*":
        return firstValue * lastValue;
      case "-":
        return firstValue - lastValue;
      case "+":
        return firstValue + lastValue;
      default:
        return null;
    }
  };
  return (
    <>
      <Box>
        <Box display={"flex"} gap={1}>
          <TextField
            value={firstValue}
            // onChange={(e) => {
            //   console.log(e);
            //   console.log(e.target.value);
            //   setFirstValue(e.target.value);
            // }}
            disabled
          />
          <Box>
            SYMBOL <b>{symbol}</b>
          </Box>
          <TextField value={lastValue} disabled />
        </Box>
        <Box>
          <Typography variant="h3">{getResult()}</Typography>
        </Box>
      </Box>
      <Box display={"flex"} p={2}>
        <Button
          sx={{ width: 80, height: 80 }}
          variant="contained"
          color="warning"
          onClick={() => {
            const deleteLastInPrev = (prev) => {
              const prevStr = prev + "";
              return prevStr.slice(0, prevStr.length - 1);
            };
            if (symbol) {
              if (!lastValue) setSymbol(null);
              else setLastValue(deleteLastInPrev);
            } else setFirstValue(deleteLastInPrev);
          }}
        >
          &larr;
        </Button>
      </Box>
      <Box className={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
          <Button
            // sx={{ width: 80, height: 80 }}
            variant="contained"
            color="warning"
            onClick={() => numberButtonOnClick(item)}
            className={item.class}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Box display={"flex"} gap={"40px"} p={2}>
        {["/", "*", "-", "+"].map((item) => (
          <Button
            sx={{ width: 80, height: 80 }}
            variant="contained"
            color="secondary"
            onClick={() => onClickToSymbol(item)}
          >
            {item}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Calculator;
