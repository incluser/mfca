import { Box, Grid, Input, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./Secondary.css";
import { SecondaryLabels } from "../../constants/static";
import * as Actions from "../../store/slices/Secondary.slice";
import { RootState } from "../../store/store";

const Secondary = () => {
  const dispatch = useDispatch();
  const secondaryState = useSelector((state: RootState) => state.Secondary);

  const handleChange = (field: keyof typeof secondaryState, value: string) => {
    dispatch(Actions.setField({ field, value: Number(value) }));
  };

  return (
    <div className="secondarycontainer">
      <VStack align="start" spacing={1}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          {SecondaryLabels.map((label, index) => (
            <Box key={index}>
              <Box as="span">{label.text}</Box>
              <Input
                placeholder="₸"
                value={secondaryState[label.value] || ""}
                onChange={(e) => handleChange(label.value, e.target.value)}
              />
            </Box>
          ))}
        </Grid>
      </VStack>
    </div>
  );
};

export default Secondary;
