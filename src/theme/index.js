import {
  extendTheme,
  FormLabel,
  Textarea,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
    },
    fonts: {
      heading: "Ubuntu",
      body: "Ubuntu",
    },

    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#F3F3F7",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },

      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);
