# Core v1

Here, we explain concepts in the Zetkin Platform API.

## General information

###  Pagination

Collections can be paginated by supplying paging parameters to the query string.
For example, if you want to paginate the [people collection](/docs/api/v1/paths/get-orgs-org-id-people), make a request
to `/orgs/1/people?p=2&pp=20`, where

- p: Page. The requested page index.
- pp: Per page. Number of items per page.


