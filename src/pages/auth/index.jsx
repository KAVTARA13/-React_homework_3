import { withNoAuth } from '../../hoc';
import SignUpPage from './sign-up';

function AuthPage() {
    return(
        <div className="row mt-5">
            <SignUpPage />
      </div>
    );
};

export default withNoAuth(AuthPage);