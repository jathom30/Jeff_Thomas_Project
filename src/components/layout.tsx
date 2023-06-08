import { FlexBox } from '.';
import './layout.css'

export const ListContainer = ({ title, children }: { title?: React.ReactNode; children: React.ReactNode }) => (
  <div className="ListContainer">
    {title ? <h1>{title}</h1> : null}
    {children}
  </div>
)

export const ListContainerGrid = ({ children }: { children: React.ReactNode }) => (
  <FlexBox flexDirection='column' gap="1rem">{children}</FlexBox>
)

ListContainer.Body = ListContainerGrid