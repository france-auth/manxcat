import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import { buyCat, CatType, getCats } from "../services/apiCats";
import { useUserContext } from "../context/UserContext";

const Shop = () => {
  const [cats, setCats] = useState<CatType[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [currCatId, setCurrCatId] = useState("");

  const { id, ownedCats, coinsEarned, setCoinsEarned } = useUserContext();
  const toast = useToast();

  useEffect(() => {
    const getAllCats = async () => {
      try {
        const data = await getCats();
        setCats(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCats();

    return () => {};
  }, []);

  async function handlePurchaseCat(catId: string) {
    const choosenCat = cats?.find((cat) => cat._id == catId);

    if (coinsEarned < Number(choosenCat?.price))
      return toast({
        title: "Insufficient gold coins to purchase cat",
        colorScheme: "orange",
        position: "top",
      });

    const own = ownedCats.find((ownedCat) => ownedCat.catId == catId);
    if (own?.numberOwned == choosenCat?.maxPurchase)
      return toast({
        title: "Max purchase reached",
        colorScheme: "orange",
        position: "top",
      });
    try {
      setIsPurchasing(true);
      setCurrCatId(catId);
      const message = await buyCat(id, catId);
      toast({
        title: message,
        position: "top",
        colorScheme: "green",
      });
      setCoinsEarned((earned) => earned - Number(choosenCat?.price));
    } catch {
      toast({
        title: `Error purchasing cat`,
        position: "top",
        colorScheme: "red",
      });
    } finally {
      setIsPurchasing(false);
    }
  }

  function owned(catId: string, max: number) {
    const cat = ownedCats.find((ownedCat) => ownedCat.catId == catId);

    if (cat) {
      return { owned: cat.numberOwned, max };
    }

    return { owned: 0, max };
  }

  return (
    <main className="apply_page-style px-5">
      <Box display={"flex"} flexDirection={"column"} py={2}>
        <Flex
          width={"full"}
          height={"100%"}
          flexDirection={"column"}
          pb={24}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
        >
          <Box
            width={"full"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <Text
              fontSize={"25px"}
              fontWeight={700}
              color={"#000807"}
              className="font-bold"
            >
              SHOP
            </Text>
            {isLoading && <Spinner />}
            {cats &&
              cats.map(
                (
                  { imageUrl, price, outputQuantity, level, maxPurchase, _id },
                  id
                ) => {
                  return (
                    <Box
                      border={"1px solid #000807"}
                      bg={"#efd0ca"}
                      className="w-full py-5 flex items-center justify-around rounded-2xl"
                      key={id}
                    >
                      <div className="w-[25%] h-auto flex items-center justify-center">
                        <img
                          src={imageUrl}
                          alt="gif"
                          className="w-full h-auto bg-transparent rounded-2xl p-1"
                        />
                      </div>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        className="gap-5 xx:w-[65%] xr:w-[60%]"
                      >
                        <Flex className="flex justify-between items-center w-full">
                          <Text
                            fontSize={"18px"}
                            fontWeight={700}
                            color={"#000807"}
                          >
                            LEVEL {level} CAT
                          </Text>
                          <Text fontSize={"13px"} fontWeight={"500"}>
                            {outputQuantity} / 3 hr
                          </Text>
                        </Flex>
                        <Button
                          borderRadius={"500px"}
                          border={"3px solid #000807"}
                          bg={"#efd0ca"}
                          textColor={"#000807"}
                          onClick={() => handlePurchaseCat(_id)}
                          disabled={isPurchasing}
                        >
                          {currCatId == _id ? (
                            isPurchasing ? (
                              <Spinner />
                            ) : (
                              ` BUY - ${price.toLocaleString()}`
                            )
                          ) : (
                            ` BUY - ${price.toLocaleString()}`
                          )}
                        </Button>
                        <Text textAlign={"right"} fontWeight={"semibold"}>
                          <Text as={"span"} mr={2}>
                            You own
                          </Text>
                          {owned(_id, maxPurchase).owned}/
                          {owned(_id, maxPurchase).max}
                        </Text>
                      </Box>
                    </Box>
                  );
                }
              )}
          </Box>
        </Flex>
      </Box>
    </main>
  );
};

export default Shop;
