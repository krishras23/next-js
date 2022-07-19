import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { username } = router.query

  return <p>Calculate: {username}</p>
}

export default Post