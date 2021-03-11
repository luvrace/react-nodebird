import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

//ButtonWrapper가 div컴포넌트가 된다.
const ButtonWrapper  = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
    // const [id, setId] = useState('');
    //최적화
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // },[]);

    const [id, onChangeId] = useInput('');

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // },[]);

    const [password, onChangePassword] = useInput('');

    const style = useMemo(() => ({ marginTop:10}),[]);

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        setIsLoggedIn(true)
    }, [id, password]);

   return (
       //onFinish는 이미 e.preventdefault 적용 되어있음
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>

            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;