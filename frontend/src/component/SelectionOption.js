import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Wrapper from "../wrappers/SelectionOption";
const SelectionOption = () => {
  const options = [
    {
      label: "first",
      value: 12222222,
    },
    {
      label: "second",
      value: 233333333333,
    },
    {
      label: "third",
      value: 34444444444,
    },
    {
      label: "fourth",
      value: 4555555555555,
    },
    {
      label: "fifth",
      value: 577777777777,
    },
  ];

  const [value, setValue] = useState([]);
  const [multiple, setMultiple] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;

      switch (e.code) {
        case "Enter":
          setIsOpen((prev) => !prev);

          if (isOpen) selectOption(options[highlightedIndex]);
          break;

        case "Space":
          setIsOpen((prev) => !prev);

          if (isOpen) selectOption(options[highlightedIndex]);
          break;

        case "ArrowUP": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
            break;
          }
          break;
        }

        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);

          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
            break;
          }
          break;
        }
        case "Escape": {
          setIsOpen(false);
          break;
        }

        default:
          break;
      }
    };
    containerRef.current?.addEventListener("Keydown", handler);
    return () => {
      containerRef.current?.removeEventListener("Keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);
  const onchange = (o) => {
    setValue(o);
  };
  const highlightlst = (index)=>{
   
    setHighlightedIndex(index)

  }

  function clearOptions() {
    multiple ? onchange([]) : onchange([options[0]]);
    setMultiple(false);
  }

  function selectOption(option) {
    if (multiple) {
      if (value.some((item) => item.label === option.label)) {
        onchange(value.filter((o) => o.label !== option.label));
      } else {
        onchange(value.concat(option));
      }
    } else {
      if (option !== value) {
        onchange([option]);
        setMultiple(true);
      }
    }
  }

  function isOptionSelected(option) {
    return multiple
      ? value.some((item) => item.label === option.label)
      : value.some((item) => item.label === option.label);
  }

  return (
    <Wrapper>
      <div
        tabIndex={0}
        ref={containerRef}
        onClick={(e) => {
          setIsOpen((prev) => !prev);
        }}
        onBlur={() => setIsOpen(false)}
        className="select-container"
      >
        <span className="select value">
          {multiple
            ? value.map((v) => {
                return (
                  <button
                    className="option-badge"
                    key={v.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOption(v);
                    }}
                  >
                    {v.label} <span className="btn-remove">&times;</span>
                  </button>
                );
              })
            : "Enter value"}
        </span>
        <button
          onClick={(e) => {
            clearOptions();
            e.stopPropagation();
          }}
          className="clear-btn"
        >
          &times;
        </button>
        <div className="divider"></div>
        <div className="caret"></div>
        <ul className={isOpen ? "options show" : "options"}>
          {options.map((option, index) => {
            return (
              <li
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                
                onMouseEnter={() => highlightlst(index)}
                className={
                  isOptionSelected(option)
                    ? `option selected ${
                        index === highlightedIndex ? "highlighted" : ""
                      }`
                    : `option ${
                        index === highlightedIndex ? "highlighted" : ""
                      }`
                }
              >
                {option?.label}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default SelectionOption;
