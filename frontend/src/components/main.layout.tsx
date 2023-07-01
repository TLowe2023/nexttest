import { Header } from "./header.component";
import { MainMenu } from "./menu.component";

export interface ChildrenProps {
  children: React.ReactNode;
}

interface MainLayoutProps extends ChildrenProps {
  title: string;
}

export function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header title={title}></Header>
      </div>
      <div className="row p-2">
        <div className="col-2">
          <MainMenu></MainMenu>
        </div>
        <div className="col-10">{children}</div>
      </div>
    </div>
  );
}
