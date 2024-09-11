import Form from "@/components/Form"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"


const CreatePost = async () => {

  // const { isAuthenticated } = getKindeServerSession()
  // if (!(await isAuthenticated())) {
  //   redirect('/api/auth/login?post_login_redirect_url=/create-post')
  // }

  return (
    <div className='text-center mx-auto w-[500px]'>
      <h1 className='my-5 text-3xl font-bold text-center'>Create Post</h1>

      <Form />
      <div className="mt-10 w-[100px] bg-slate-600 rounded-lg px-4 py-2 mx-auto text-white">
        <LogoutLink>Log out</LogoutLink>
      </div>
    </div>
  )
}

export default CreatePost