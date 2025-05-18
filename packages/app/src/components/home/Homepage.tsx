import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { JiraUserIssuesViewCard } from '@axis-backstage/plugin-jira-dashboard';


<Grid item xs={12} md={6}>
  <JiraUserIssuesViewCard
    bottomLinkProps={{
      link: 'https://reqcentral.com/browse/',
      title: 'Open in Jira',
    }}
    maxResults={30} // default is 15
    tableOptions={{
      toolbar: true, // default is false
      search: true, // default is false
      paging: true, // default is true
      pageSize: 15, // default is 10
    }}
    tableStyle={{
      padding: '5px', // default is 0px
      overflowY: 'auto', // default is auto
      width: '95%', // default is 100%
    }}
  />
</Grid>;