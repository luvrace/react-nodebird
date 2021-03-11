import React, {useCallback, useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const Signup = () => {

    const ErrorMessage = styled.div`
      color: 'red';
    `;
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // },[]);
    const [id, onChangeId] = useInput('');

    // const [nickname, setNickname] = useState('');
    // const onChangeNickname = useCallback((e) => {
    //     setNickname(e.target.value);
    // },[]);

    const [nickname, onChangeNickname] = useInput('');

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // },[])

    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');

    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    const onSubmit = useCallback(() => {

    }, []);


    return(
        <AppLayout>
            <Head>
                <meta charSet="utf-8"/>
                <title>회원가입 | Node bird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">패스워드</label>
                    <Input name="user-password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호 체크</label>
                    <Input name="user-password" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                </div>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</div>}
            </Form>
        </AppLayout>
    )
};

export default Signup;