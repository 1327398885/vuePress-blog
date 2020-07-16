(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{370:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker常见命令"}},[s._v("#")]),s._v(" Docker常见命令")]),s._v(" "),t("h2",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[s._v("#")]),s._v(" 镜像")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取镜像")]),s._v("\ndocker pull nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取镜像指定版本 ")]),s._v("\ndocker pull nginx:latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker列出镜像")]),s._v("\ndocker images\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除镜像")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询某个镜像")]),s._v("\ndocker search "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"docker载入镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker载入镜像"}},[s._v("#")]),s._v(" Docker载入镜像")]),s._v(" "),t("h4",{attrs:{id:"存出镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存出镜像"}},[s._v("#")]),s._v(" 存出镜像")]),s._v(" "),t("p",[s._v("导出镜像到本地，使用docker save")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nubuntu              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.04")]),s._v("               c4ff7513909d        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" weeks ago         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("225.4")]),s._v(" MB\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sudo")]),s._v(" docker save -o ubuntu_14.04.tar ubuntu:14.04\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"载入镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#载入镜像"}},[s._v("#")]),s._v(" 载入镜像")]),s._v(" "),t("p",[s._v("可以使用 docker load 从导出的本地文件中再导入到本地镜像库，例如")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker load --input ubuntu_14.04.tar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker load "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ubuntu_14.04.tar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这将导入镜像以及其相关的元数据信息（包括标签等）。")]),s._v(" "),t("h3",{attrs:{id:"docker-镜像的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像的实现原理"}},[s._v("#")]),s._v(" Docker 镜像的实现原理")]),s._v(" "),t("p",[s._v("Docker 镜像是怎么实现增量的修改和维护的？ 每个镜像都由很多层次构成，Docker 使用 "),t("a",{attrs:{href:"http://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[s._v("Union FS"),t("OutboundLink")],1),s._v(" 将这些不同的层结合到一个镜像中去。")]),s._v(" "),t("p",[s._v("通常 Union FS 有两个用途，一方面可以实现不借助 LVM、RAID 将多个 disk 挂到同一个目录下，另一个更常用的就是将一个只读的分支和一个可写的分支联合在一起，Live CD 正是基于此方法可以允许在镜像不变的基础上允许用户在其上进行一些写操作。 Docker 在 AUFS 上构建的容器也是利用了类似的原理。")]),s._v(" "),t("h2",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[s._v("#")]),s._v(" 容器")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前运行容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有容器(包括停止的容器)")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器(-f 强制删除命令)")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  trusting_newton \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器(可以在run的时候添加其他参数)")]),s._v("\ndocker run nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动的时候进入容器")]),s._v("\ndocker run -it nginx /bin/bash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露容器端口")]),s._v("\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名容器")]),s._v("\ndocker run --name nginx nginx:latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止运行中的容器")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动停止的容器")]),s._v("\ndocker start "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\ndocker restart "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以守护态运行")]),s._v("\ndocker run -d nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker容器的日志")]),s._v("\ndocker logs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("h3",{attrs:{id:"docker导出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker导出容器"}},[s._v("#")]),s._v(" Docker导出容器")]),s._v(" "),t("h4",{attrs:{id:"导出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出容器"}},[s._v("#")]),s._v(" 导出容器")]),s._v(" "),t("p",[s._v("如果要导出本地某个容器，可以使用 docker export 命令。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                    PORTS               NAMES\n7691a814370e        ubuntu:14.04        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" hours ago        Exited "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" hours ago                       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 7691a814370e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ubuntu.tar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这样将导出容器快照到本地文件。")]),s._v(" "),t("h4",{attrs:{id:"导入容器快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入容器快照"}},[s._v("#")]),s._v(" 导入容器快照")]),s._v(" "),t("p",[s._v("可以使用 docker import 从容器快照文件中再导入为镜像，例如")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ubuntu.tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/ubuntu:v1.0\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED              VIRTUAL SIZE\ntest/ubuntu         v1.0                9d37a6082e97        About a minute ago   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("171.3")]),s._v(" MB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("此外，也可以通过指定 URL 或者某个目录来导入，例如")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" http://example.com/exampleimage.tgz example/imagerepo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注：用户既可以使用 docker load 来导入镜像存储文件到本地镜像库，也可以使用 docker import 来导入一个容器快照到本地镜像库。这两者的区别在于容器快照文件将丢弃所有的历史记录和元数据信息（即仅保存容器当时的快照状态），而镜像存储文件将保存完整记录，体积也要大。此外，从容器快照文件导入时可以重新指定标签等元数据信息。")])]),s._v(" "),t("h2",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[s._v("#")]),s._v(" 数据卷")]),s._v(" "),t("p",[s._v("Docker 创建数据卷")]),s._v(" "),t("p",[s._v("数据卷是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：")]),s._v(" "),t("ul",[t("li",[s._v("数据卷可以在容器之间共享和重用")]),s._v(" "),t("li",[s._v("对数据卷的修改会立马生效")]),s._v(" "),t("li",[s._v("对数据卷的更新，不会影响镜像")]),s._v(" "),t("li",[s._v("卷会一直存在，直到没有容器使用")])]),s._v(" "),t("blockquote",[t("p",[s._v("数据卷的使用，类似于 Linux 下对目录或文件进行 mount。")])]),s._v(" "),t("h3",{attrs:{id:"创建一个数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个数据卷"}},[s._v("#")]),s._v(" 创建一个数据卷")]),s._v(" "),t("p",[s._v("下面创建一个 web 容器，并加载一个数据卷到容器的 /webapp 目录。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d -P --name web -v /webapp training/webapp python app.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：也可以在 Dockerfile 中使用 VOLUME 来添加一个或者多个新的卷到由该镜像创建的任意容器。")])]),s._v(" "),t("h3",{attrs:{id:"挂载一个主机目录作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个主机目录作为数据卷"}},[s._v("#")]),s._v(" 挂载一个主机目录作为数据卷")]),s._v(" "),t("p",[s._v("使用 -v 标记也可以指定挂载一个本地主机的目录到容器中去。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面的命令加载主机的 /src/webapp 目录到容器的 /opt/webapp 目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，如果目录不存在 Docker 会自动为你创建它。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：Dockerfile 中不支持这种用法，这是因为 Dockerfile 是为了移植和分享用的。然而，不同操作系统的路径格式不一样，所以目前还不能支持。")])]),s._v(" "),t("p",[s._v("Docker 挂载数据卷的默认权限是读写，用户也可以通过 :ro 指定为只读。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d -P --name web -v /src/webapp:/opt/webapp:ro\ntraining/webapp python app.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("加了 :ro 之后，就挂载为只读了。")]),s._v(" "),t("h3",{attrs:{id:"挂载一个本地主机文件作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个本地主机文件作为数据卷"}},[s._v("#")]),s._v(" 挂载一个本地主机文件作为数据卷")]),s._v(" "),t("p",[s._v("-v 标记也可以从主机挂载单个文件到容器中")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就可以记录在容器输入过的命令了。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：如果直接挂载一个文件，很多文件编辑工具，包括 vi 或者 sed --in-place，可能会造成文件 inode 的改变，从 Docker 1.1 .0 起，这会导致报错误信息。所以最简单的办法就直接挂载文件的父目录。")])]),s._v(" "),t("h2",{attrs:{id:"docker-数据卷容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-数据卷容器"}},[s._v("#")]),s._v(" Docker 数据卷容器")]),s._v(" "),t("p",[s._v("如果你有一些持续更新的数据需要在容器之间共享，最好创建数据卷容器。")]),s._v(" "),t("p",[s._v("数据卷容器，其实就是一个正常的容器，专门用来提供数据卷供其它容器挂载的。")]),s._v(" "),t("p",[s._v("首先，创建一个命名的数据卷容器 dbdata：")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d -v /dbdata --name dbdata training/postgres "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Data-only container "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" postgres\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后，在其他容器中使用 --volumes-from 来挂载 dbdata 容器中的数据卷。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --volumes-from dbdata --name db1 training/postgres\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --volumes-from dbdata --name db2 training/postgres\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("还可以使用多个 --volumes-from 参数来从多个容器挂载多个数据卷。 也可以从其他已经挂载了数据卷的容器来挂载数据卷。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --name db3 --volumes-from db1 training/postgres\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：使用 --volumes-from 参数所挂载数据卷的容器自己并不需要保持在运行状态")])]),s._v(" "),t("p",[s._v("如果删除了挂载的容器（包括 dbdata、db1 和 db2），数据卷并不会被自动删除。如果要删除一个数据卷，必须在删除最后一个还挂载着它的容器时使用 docker rm -v 命令来指定同时删除关联的容器。 这可以让用户在容器之间升级和移动数据卷。")]),s._v(" "),t("h3",{attrs:{id:"docker-备份、恢复、迁移数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-备份、恢复、迁移数据卷"}},[s._v("#")]),s._v(" Docker 备份、恢复、迁移数据卷")]),s._v(" "),t("p",[s._v("可以利用数据卷对其中的数据进行进行备份、恢复和迁移。")]),s._v(" "),t("h4",{attrs:{id:"备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),t("p",[s._v("首先使用 --volumes-from 标记来创建一个加载 dbdata 容器卷的容器，并从本地主机挂载当前到容器的 /backup 目录。命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run --volumes-from dbdata -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(":/backup ubuntu "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" cvf /backup/backup.tar /dbdata\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("容器启动后，使用了 tar 命令来将 dbdata 卷备份为本地的 /backup/backup.tar。")]),s._v(" "),t("h4",{attrs:{id:"恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[s._v("#")]),s._v(" 恢复")]),s._v(" "),t("p",[s._v("如果要恢复数据到一个容器，首先创建一个带有数据卷的容器 dbdata2")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -v /dbdata --name dbdata2 ubuntu /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后创建另一个容器，挂载 dbdata2 的容器，并使用 untar 解压备份文件到挂载的容器卷中。")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run --volumes-from dbdata2 -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(":/backup busybox "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf\n/backup/backup.tar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);