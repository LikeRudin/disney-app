import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useQuery } from "@tanstack/react-query"
import { fetchDetail } from "../fetchers"

const Container = styled.div``
interface detailData {
  films: string[]
  id: number
  imageUrl: string
  name: string
  sourceUrl: string
}
export const Detail = () => {
  const {id} = useParams();

  const {isLoading, data: detailData} = useQuery<detailData>(["detailData"], ()=> {
    return fetchDetail(Number(id))
  })
  return (<>{isLoading?<h1> Loading </h1> : 
  <Container>
    {console.log(detailData) === undefined}
  </Container> 
  }</>)
};
