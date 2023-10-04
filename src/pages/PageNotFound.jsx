import image from "../assets/image/download.jpeg"
import {useTitle} from "../hooks/useTitle"

export const PageNotFound = () => {

  useTitle("PageNotFound")
  return (
 <section className="pageNotFound">
  <p>404 / Page Not Found</p>
  <img src={image} alt="" />
 </section>    
  )
}
