import SEO from "@/SEO"


const Head = ({title,description}) => {
  return (
    <SEO title={title} description={description}>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
    </SEO>
  )
}

export default Head
