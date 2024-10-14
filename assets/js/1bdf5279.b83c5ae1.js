"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3357],{1800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(4848),l=s(8453);const r={id:"generic-commands",sidebar_label:"Generic",title:"Generic API",slug:"generic"},t=void 0,a={id:"commands/generic-commands",title:"Generic API",description:"Connection Commands",source:"@site/docs/commands/generic-commands.md",sourceDirName:"commands",slug:"/commands/generic",permalink:"/garnet/docs/commands/generic",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/commands/generic-commands.md",tags:[],version:"current",frontMatter:{id:"generic-commands",sidebar_label:"Generic",title:"Generic API",slug:"generic"},sidebar:"garnetDocSidebar",previous:{title:"Raw String",permalink:"/garnet/docs/commands/raw-string"},next:{title:"Analytics",permalink:"/garnet/docs/commands/analytics"}},h={},d=[{value:"Connection Commands",id:"connection-commands",level:2},{value:"AUTH",id:"auth",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Resp Reply",id:"resp-reply",level:4},{value:"ECHO",id:"echo",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Resp Reply",id:"resp-reply-1",level:4},{value:"HELLO",id:"hello",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Resp Reply",id:"resp-reply-2",level:4},{value:"PING",id:"ping",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Resp Reply",id:"resp-reply-3",level:4},{value:"QUIT",id:"quit",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Resp Reply",id:"resp-reply-4",level:4},{value:"SELECT",id:"select",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"Resp Reply",id:"resp-reply-5",level:4},{value:"Generic Commands",id:"generic-commands",level:2},{value:"DEL",id:"del",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"Resp Reply",id:"resp-reply-6",level:4},{value:"EXISTS",id:"exists",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"Resp Reply",id:"resp-reply-7",level:4},{value:"EXPIRE",id:"expire",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"Resp Reply",id:"resp-reply-8",level:4},{value:"EXPIREAT",id:"expireat",level:3},{value:"Syntax",id:"syntax-9",level:4},{value:"Resp Reply",id:"resp-reply-9",level:4},{value:"EXPIRETIME",id:"expiretime",level:3},{value:"Syntax",id:"syntax-10",level:4},{value:"Resp Reply",id:"resp-reply-10",level:4},{value:"KEYS",id:"keys",level:3},{value:"Syntax",id:"syntax-11",level:4},{value:"Resp Reply",id:"resp-reply-11",level:4},{value:"MIGRATE",id:"migrate",level:3},{value:"Resp Reply",id:"resp-reply-12",level:4},{value:"PERSIST",id:"persist",level:3},{value:"Syntax",id:"syntax-12",level:4},{value:"Resp Reply",id:"resp-reply-13",level:4},{value:"PEXPIRE",id:"pexpire",level:3},{value:"Syntax",id:"syntax-13",level:4},{value:"Resp Reply",id:"resp-reply-14",level:4},{value:"PEXPIRETIME",id:"pexpiretime",level:3},{value:"Syntax",id:"syntax-14",level:4},{value:"Resp Reply",id:"resp-reply-15",level:4},{value:"PEXPIREAT",id:"pexpireat",level:3},{value:"Syntax",id:"syntax-15",level:4},{value:"Resp Reply",id:"resp-reply-16",level:4},{value:"PTTL",id:"pttl",level:3},{value:"Syntax",id:"syntax-16",level:4},{value:"Resp Reply",id:"resp-reply-17",level:4},{value:"RENAME",id:"rename",level:3},{value:"Syntax",id:"syntax-17",level:4},{value:"Resp Reply",id:"resp-reply-18",level:4},{value:"RENAMENX",id:"renamenx",level:3},{value:"Syntax",id:"syntax-18",level:4},{value:"Resp Reply",id:"resp-reply-19",level:4},{value:"SCAN",id:"scan",level:3},{value:"Syntax",id:"syntax-19",level:4},{value:"Resp Reply",id:"resp-reply-20",level:4},{value:"TTL",id:"ttl",level:3},{value:"Syntax",id:"syntax-20",level:4},{value:"Resp Reply",id:"resp-reply-21",level:4},{value:"TYPE",id:"type",level:3},{value:"Syntax",id:"syntax-21",level:4},{value:"Resp Reply",id:"resp-reply-22",level:4},{value:"UNLINK",id:"unlink",level:3},{value:"Syntax",id:"syntax-22",level:4},{value:"Resp Reply",id:"resp-reply-23",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"connection-commands",children:"Connection Commands"}),"\n",(0,i.jsx)(n.h3,{id:"auth",children:"AUTH"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    AUTH <placeholderforpassword>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Authenticates the connection."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Simple string reply: OK, or an error if the password, or username/password pair, is invalid."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Security notice:"})}),"\n",(0,i.jsx)(n.p,{children:"Only use strong and long passwords so an attack is infeasible. A better way to manage authentication will be using the ACL feature."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"echo",children:"ECHO"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    ECHO <message>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns message."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-1",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Bulk string reply: the given string."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hello",children:"HELLO"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    HELLO [protover [AUTH username password] [SETNAME clientname]]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Switch to a different protocol, optionally authenticating and setting the connection's name, or provide a contextual client report."}),"\n",(0,i.jsxs)(n.p,{children:["When called with the optional ",(0,i.jsx)(n.code,{children:"protover"})," argument, this command switches the protocol to the specified version and also accepts the following options:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AUTH <username> <password>"}),': directly authenticate the connection in addition to switching to the specified protocol version. This makes calling AUTH before HELLO unnecessary when setting up a new connection. Note that the username can be set to "default" to authenticate against a server that does not use ACLs, but rather the simpler requirepass mechanism of Redis prior to version 6.\n',(0,i.jsx)(n.code,{children:"SETNAME <clientname>"}),": this is the equivalent of calling CLIENT SETNAME."]}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-2",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Map reply: a list of server properties. Simple error reply: if the protover requested does not exist."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ping",children:"PING"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PING key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns PONG if no argument is provided, otherwise return a copy of the argument as a bulk string."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-3",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Any of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Simple string reply: PONG when no argument is provided."}),"\n",(0,i.jsx)(n.li,{children:"Bulk string reply: the provided argument."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"quit",children:"QUIT"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    QUIT\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ask the server to close the connection. The connection is close when all pending replies have been written to the client."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-4",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"select",children:"SELECT"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    SELECT\n"})}),"\n",(0,i.jsx)(n.p,{children:"Select the Redis logical database having the specified zero-based numeric index. New connections always use the database 0."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-5",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"generic-commands",children:"Generic Commands"}),"\n",(0,i.jsx)(n.h3,{id:"del",children:"DEL"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    DEL key [key ...]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Removes the specified keys. A key is ignored if it does not exist."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-6",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Integer reply: the number of keys that were removed."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"exists",children:"EXISTS"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    EXISTS key [key ...]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Determines whether one or more keys exist. If the same existing key is mentioned in the arguments multiple times, it will be counted multiple times. So if foo exists, EXISTS foo foo will return 2."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-7",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Integer reply: the number of keys that exist from those specified as arguments."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"expire",children:"EXPIRE"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    EXPIRE key seconds [NX | XX | GT | LT]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set a timeout on key in seconds. After the timeout has expired, the key will automatically be deleted."}),"\n",(0,i.jsx)(n.p,{children:"The EXPIRE command supports a set of options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NX"})," -- Set expiry only when the key has no expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XX"})," -- Set expiry only when the key has an existing expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GT"})," -- Set expiry only when the new expiry is greater than current one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LT"})," -- Set expiry only when the new expiry is less than current one"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The GT, LT and NX options are mutually exclusive."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-8",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: 0 if the timeout was not set; for example, the key doesn't exist, or the operation was skipped because of the provided arguments."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: 1 if the timeout was set."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"expireat",children:"EXPIREAT"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-9",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    EXPIREAT key seconds [NX | XX | GT | LT]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set a timeout on key using absolute Unix timestamp (seconds since January 1, 1970) in seconds. After the timestamp, the key will automatically be deleted."}),"\n",(0,i.jsx)(n.p,{children:"The EXPIREAT command supports a set of options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NX"})," -- Set expiry only when the key has no expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XX"})," -- Set expiry only when the key has an existing expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GT"})," -- Set expiry only when the new expiry is greater than current one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LT"})," -- Set expiry only when the new expiry is less than current one"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The GT, LT and NX options are mutually exclusive."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-9",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: 0 if the timeout was not set; for example, the key doesn't exist, or the operation was skipped because of the provided arguments."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: 1 if the timeout was set."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"expiretime",children:"EXPIRETIME"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-10",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    EXPIRETIME key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the absolute Unix timestamp (since January 1, 1970) in seconds at which the given key will expire."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-10",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: Expiration Unix timestamp in milliseconds."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -1 if the key exists but has no associated expiration time."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -2 if the key does not exist."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"keys",children:"KEYS"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-11",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    KEYS pattern\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns all keys matching pattern."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," consider KEYS as a command that should only be used in production environments with extreme care. It may ruin performance when it is executed against large databases."]}),"\n",(0,i.jsx)(n.p,{children:"Examples of supported patterns:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"h?llo matches hello, hallo and hxllo"}),"\n",(0,i.jsx)(n.li,{children:"h*llo matches hllo and heeeello"}),"\n",(0,i.jsx)(n.li,{children:"h[ae]llo matches hello and hallo, but not hillo"}),"\n",(0,i.jsx)(n.li,{children:"h[^e]llo matches hallo, hbllo, ... but not hello"}),"\n",(0,i.jsx)(n.li,{children:"h[a-b]llo matches hallo and hbllo"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use \\ to escape special characters if you want to match them verbatim."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-11",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Array reply: a list of keys matching pattern."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"migrate",children:"MIGRATE"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TODO: Verify syntax and functionality"})}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-12",children:"Resp Reply"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"persist",children:"PERSIST"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-12",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PERSIST key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Removes the existing timeout on a key, turning the key from volatile (a key with an expire set) to persistent (a key that will never expire as no timeout is associated)."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-13",children:"Resp Reply"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pexpire",children:"PEXPIRE"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-13",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PEXPIRE key milliseconds [NX | XX | GT | LT]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command works exactly like ",(0,i.jsx)(n.a,{href:"#expire",children:"EXPIRE"})," but the time to live of the key is specified in milliseconds instead of seconds."]}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-14",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: 0 if key does not exist or does not have an associated timeout."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: 1 if the timeout has been removed."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pexpiretime",children:"PEXPIRETIME"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-14",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PEXPIRETIME key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the absolute Unix timestamp (since January 1, 1970) in milliseconds at which the given key will expire."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-15",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: Expiration Unix timestamp in milliseconds."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -1 if the key exists but has no associated expiration time."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -2 if the key does not exist."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pexpireat",children:"PEXPIREAT"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-15",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PEXPIREAT key seconds [NX | XX | GT | LT]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set a timeout on key using absolute Unix timestamp (seconds since January 1, 1970) in milliseconds. After the timestamp, the key will automatically be deleted."}),"\n",(0,i.jsx)(n.p,{children:"The PEXPIREAT command supports a set of options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NX"})," -- Set expiry only when the key has no expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XX"})," -- Set expiry only when the key has an existing expiry"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GT"})," -- Set expiry only when the new expiry is greater than current one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LT"})," -- Set expiry only when the new expiry is less than current one"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The GT, LT and NX options are mutually exclusive."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-16",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: 0 if the timeout was not set; for example, the key doesn't exist, or the operation was skipped because of the provided arguments."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: 1 if the timeout was set."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pttl",children:"PTTL"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-16",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    PTTL  key\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Like ",(0,i.jsx)(n.a,{href:"#ttl",children:"TTL"})," this command returns the remaining time to live of a key that has an expire set, with the sole difference that TTL returns the amount of remaining time in seconds while PTTL returns it in milliseconds."]}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-17",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: TTL in milliseconds."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -1 if the key exists but has no associated expiration."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -2 if the key does not exist."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rename",children:"RENAME"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-17",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    RENAME key newkey\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Renames key to newkey. It returns an error when key does not exist. If newkey already exists it is overwritten, when this happens RENAME executes an implicit ",(0,i.jsx)(n.a,{href:"#del",children:"DEL"})," operation."]}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-18",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"renamenx",children:"RENAMENX"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-18",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    RENAME key newkey\n"})}),"\n",(0,i.jsx)(n.p,{children:"Renames key to newkey if newkey does not yet exist. It returns an error when key does not exist."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-19",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: 1 if key was renamed to newkey."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: 0 if newkey already exists."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"scan",children:"SCAN"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-19",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Iterates over the keys that exist in the store and returns only the ones matching the selected filters."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The MATCH option"}),"\nIt is possible to only iterate elements matching a given glob-style pattern, similarly to the behavior of the ",(0,i.jsx)(n.a,{href:"#keys",children:"KEYS"})," command that takes a pattern as its only argument."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The TYPE option"}),"\nYou can use the TYPE option to ask SCAN to only return objects that match a given type, allowing you to iterate through the database looking for keys of a specific type."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The COUNT option"})}),"\n",(0,i.jsx)(n.p,{children:"The default COUNT value is 10, but the user is free to change it."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-20",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Array reply: specifically, an array with two elements."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first element is a Bulk string reply that represents an unsigned 64-bit number, the cursor."}),"\n",(0,i.jsx)(n.li,{children:"The second element is an Array reply with the names of scanned keys."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ttl",children:"TTL"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-20",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    TTL key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the remaining time to live of a key that has a timeout."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-21",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integer reply: TTL in seconds."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -1 if the key exists but has no associated expiration."}),"\n",(0,i.jsx)(n.li,{children:"Integer reply: -2 if the key does not exist."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"TYPE"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-21",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    TYPE key\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the string representation of the type of the value stored at key. The different types that can be returned are: string, list, set, zset, and hash."}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-22",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Simple string reply: the type of key, or none when key doesn't exist."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"unlink",children:"UNLINK"}),"\n",(0,i.jsx)(n.h4,{id:"syntax-22",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash"})}),"\n",(0,i.jsxs)(n.p,{children:["This command is very similar to ",(0,i.jsx)(n.a,{href:"#del",children:"DEL"}),": it removes the specified keys. Just like ",(0,i.jsx)(n.a,{href:"#del",children:"DEL"})," a key is ignored if it does not exist. However the command performs the actual memory reclaiming in a different thread, so it is not blocking, while ",(0,i.jsx)(n.a,{href:"#del",children:"DEL"})," is."]}),"\n",(0,i.jsx)(n.h4,{id:"resp-reply-23",children:"Resp Reply"}),"\n",(0,i.jsx)(n.p,{children:"Integer reply: the number of keys that were unlinked."}),"\n",(0,i.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);