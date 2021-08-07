import React from "react";
import { Card, CardContent } from "@material-ui/core";
import UploadForm from "../components/edit/UploadForm";

const edit = () => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          {/*  UploadForm 컴포넌트를 추가하고, 적절한 props를 전달해주세요. */}
          <UploadForm feedUid={feedUid} />
        </CardContent>
      </Card>
    </div>
  );
};

export default edit;
