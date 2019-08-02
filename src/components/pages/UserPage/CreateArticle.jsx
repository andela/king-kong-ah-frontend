import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import PageLayout from '<templates>/PageLayout/PageLayout';
import headerMapper from '<helpers>/headerMapper';
import FlexContainer from '<atoms>/layouts/FlexContainer/FlexContainer';
import items from './navItems';
import ArticleForm from '<molecules>/ArticleForm/ArticleForm';
import { categories, rules, createData } from './formItems';
import renderEditor, { editor } from '<helpers>/editorJS';
import requestApi from '<helpers>/requestApi';
import editorConverter from '<helpers>/editorConverter';

const CreateArticle = (props) => {
  const navItems = headerMapper(items);

  const handleSubmit = async (values) => {
    await editor.isReady;
    const outputData = await editor.save();
    const { blocks } = outputData;

    blocks.forEach((block) => {
      const [body, articleImage] = editorConverter(block);
      if (body) {
        values.body += body;
      } else {
        values.articleImage = articleImage;
      }
    });

    const { history } = props;
    try {
      values.isPublished = true;
      const response = await requestApi('post', '/articles', values);
      toast.success('Success Notification!') && response.data;
      setTimeout(history.push(`/articlePage/${response.data.data.id}`), 10000);
    } catch (error) {
      toast.error(error.message);
      return error;
    }
  };
  return (
    <PageLayout navItems={navItems}>
      <FlexContainer
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <ArticleForm
          dropDown={categories}
          callback={handleSubmit}
          rules={rules}
          inputData={createData}
          renderEditor={renderEditor}
        />
      </FlexContainer>
      <FlexContainer>

      </FlexContainer>
    </PageLayout>
  );
};

CreateArticle.propTypes = {
  history: PropTypes.object,
};

export default CreateArticle;
