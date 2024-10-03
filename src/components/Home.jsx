import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Home() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let getAllData = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data.products);
    setData(data.products);
    setLoading(false);
  };
  useEffect(() => {
    getAllData();
  }, []);
  let navigate = useNavigate();
  function handleNavigate(e) {
    e.preventDefault();
    navigate("/view");
  }
  let { background } = useContext(Context);
  return (
    <div className="grid grid-cols-12 gap-3 p-5">
      {loading && (
        <div className="flex flex-wrap gap-32 items-center w-[97vw] justify-center">
          {Array(8)
            .fill(0)
            .map((ele, key) => (
              // <SkeletonTheme
              //   key={key}
              //   baseColor={background?"#202020":'#c1c1c1'}
              //   highlightColor={background?"#795395":'#ffffff'}
              //   className="flex flex-wrap justify-center items-center"
              //   inline={true}
              // >
              //   <div className="">
              //     <Skeleton height={550} width={350} className="mb-4">
              //     <div className="mt-2">
              //     <SkeletonTheme   key={key}
              //   baseColor={background?"#202020":'#c1c1c1'}
              //   highlightColor={background?"#795395":'#ffffff'}
              //   className="mt-3 flex flex-wrap justify-center items-center"
              //   inline={true}>
              //     <Skeleton height={100} width="100%" className="mb-4 mt-3" />
              //     <Skeleton height={100} width="100%" />
              //     </SkeletonTheme>
              //     </div>
              //     </Skeleton>

              //   </div>
              // </SkeletonTheme>
              <div
                className="flex justify-center items-center"
                style={{ backgroundColor: background ? "#202020" : "#c1c1c1" }}
              >
                <SkeletonTheme
                  key={key}
                  highlightColor={background ? "#795395" : "#ffffff"}
                  baseColor={background ? "#202020" : "#c1c1c1"}
                >
                  <div>
                    <Skeleton
                      height={450}
                      width={300}
                      baseColor={background ? "#202020" : "#c1c1c1"}
                    />
                    <div className="flex justify-evenly mb-4">
                      <Skeleton
                        width={100}
                        height={40}
                        baseColor={background ? "#202020" : "#c1c1c1"}
                      />
                      <Skeleton
                        width={100}
                        height={40}
                        baseColor={background ? "#202020" : "#c1c1c1"}
                      />
                    </div>
                  </div>
                </SkeletonTheme>
              </div>
            ))}
        </div>
      )}
      {data.map((ele, key) => (
        <Card
          key={key}
          className="lg:col-span-3 sm:col-span-6 col-span-12 m-auto h-[550px] w-80 flex text-center"
          sx={{ maxWidth: 345 }}
          style={
            background
              ? {
                  backgroundColor: "rgb(25,25,25)",
                  color: "white",
                  transition: "all 0.5s ease-in-out",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                  transition: "all 0.5s ease-in-out",
                }
          }
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ele.thumbnail}
              // className="h-60"
            />
            <CardContent>
              <Typography
                className="h-20"
                gutterBottom
                variant="h5"
                component="div"
              >
                {ele.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontSize: "1.2rem",
                  marginBottom: "15px",
                }}
                style={
                  background
                    ? { color: "white", transition: "all 0.5s ease-in-out" }
                    : { color: "black", transition: "all 0.5s ease-in-out" }
                }
              >
                ⭐{ele.rating}
                <br />${ele.price}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  state={ele}
                  onClick={handleNavigate}
                >
                  View
                </Button>
                <Button variant="contained">Add to Cart</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
